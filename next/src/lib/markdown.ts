import fs from 'fs';
import matter from 'gray-matter';
import {join} from 'path';
import remark from 'remark';
import html from 'remark-html';
import {VFileCompatible} from 'vfile';

const postsDirectory = join(process.cwd(), 'src/_posts/legals');

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

interface IPost {
  slug: string;
  content: string;
  title: string;
  date?: string;
}

export function getPostBySlug(slug: string): IPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);

  const items = {slug: realSlug, content: content, title: data?.title};

  return items;
}

export function getAllPosts(): IPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) =>
      post1 && post1.date && post2 && post2.date && post1.date > post2.date
        ? -1
        : 1,
    );

  return posts as IPost[];
}

export async function markdownToHtml(
  markdown: VFileCompatible,
): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
