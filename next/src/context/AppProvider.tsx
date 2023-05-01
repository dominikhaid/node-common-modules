import React, {Component} from 'react';

interface AppPropsIface {
  children: React.ReactNode;
}

type Tile = {
  href: string;
  thumb?: string;
  title: string;
  excerpt?: string;
};

interface IAppStateIface {
  menus: {
    main: {
      title: string;
      links: Tile[];
    };
    legals: {
      title: string;
      links: Tile[];
    };
  };
  contact: IContact;
}

const deafultValues = {
  menus: {
    main: {
      title: 'Seiten',
      links: [
        {
          title: 'Bauservice Mühltal',
          href: '/',
          thumb: 'images/backgrounds/pexels-media-1249611.jpeg',
          excerpt:
            'Wir unterstützen Sie bei der Planung und Umsetzung ihrer Baulichen Maßnahmen in allen Bereichen des Innen- und Aussenumbau. Sanierungen zählen ebenso zu unseren Kompetenzen wie Komplettlösungen und spezielle Holzfertigungen. ',
        },
        {
          title: 'Projekte',
          href: '/projekte',
          thumb: 'images/backgrounds/pexels-media-358636.jpeg',
          excerpt:
            'Wir unterstützen Sie bei der Planung und Umsetzung ihrer Baulichen Maßnahmen in allen Bereichen des Innen- und Aussenumbau. Sanierungen zählen ebenso zu unseren Kompetenzen wie Komplettlösungen und spezielle Holzfertigungen. ',
        },
        {
          title: 'Kontakt',
          href: '/kontakt',
          thumb: 'images/backgrounds/pexels-media-416405.jpeg',
          excerpt:
            'Wir unterstützen Sie bei der Planung und Umsetzung ihrer Baulichen Maßnahmen in allen Bereichen des Innen- und Aussenumbau. Sanierungen zählen ebenso zu unseren Kompetenzen wie Komplettlösungen und spezielle Holzfertigungen. ',
        },
      ],
    },
    legals: {
      title: 'Legals',
      links: [
        {
          title: 'Impressum',
          href: '/legals/impressum',
        },
        {
          title: 'Datenschutz',
          href: '/legals/datenschutz',
        },
      ],
    },
  },
  contact: {
    first_name: 'Daniel',
    last_name: 'Haid',
    full_name: 'Daniel Haid',
    company: 'Bauservice Mühltal UG',
    title: 'Schreiner Meister',
    address: 'Am Grünen Weg 9, 64367 Mühltal',
    address_line: 'Am Grünen Weg 9',
    zip: '64367',
    city: 'Mühltal',
    state: 'Hessen',
    email: 'info@bauservice-muehltal.de',
    web: 'www.bauservice-muehltal.de',
    mobile: '+49171-4153367',
    tel: '+496154-6241077',
    bank: 'Sparkasse Darmstadt',
    iban: 'DE48 5085 0150 0026 0214 72',
    bic: 'HELADEF1DAS',
  },
};

//const AppContext = React.createContext<IAppStateIface | null>(null);
const AppContext = React.createContext<IAppStateIface>(deafultValues);

/**
 * @desc Main App Context
 */
export default class AppProvider<
  Props extends AppPropsIface,
  State extends IAppStateIface,
> extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  State: IAppStateIface = {
    ...deafultValues,
  };

  render(): React.ReactNode {
    const {children} = this.props;
    {
      return (
        <AppContext.Provider value={this.State}>{children}</AppContext.Provider>
      );
    }
  }
}

export {AppContext, AppProvider};
