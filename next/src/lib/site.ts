interface BodyClassProps {
  path: string;
  windowTitle: string;
}

const addClassToBody = ({
  path = '/',
  windowTitle = 'Home',
}: BodyClassProps): string => {
  const body = document.querySelector('body');
  if (body === null) return '';
  switch (path) {
    case '':
      body?.classList.add('home');
      break;
    case '404':
      body?.classList.add('error-404');
      windowTitle = '404';
      break;
    case '500':
      body?.classList.add('error-500');
      windowTitle = '500';
      break;

    default:
      body?.classList.add(path);
      break;
  }
  return windowTitle;
};

export {addClassToBody};
