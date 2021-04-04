import React, { ReactElement } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

// Typescript declarations
interface NavigationLink {
  node: {
    href: string;
    text: string;
    order: number;
  }
}

const NavigationItem = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query navigationLinksHeader {
      allContentfulNavigationLinks(sort: { fields: order, order: ASC }) {
        edges {
          node {
            href
            text
            order
          }
        }
      }
    }
  `);

  return (
    data.allContentfulNavigationLinks.edges.map(({ node }: NavigationLink): ReactElement => (
      <Link
        key={node.href}
        to={node.href}
        className='block hover:text-black no-underline pr-3 py-3 text-base text-font-color text-left w-full'
      >
        {node.text}
      </Link>
    ))
  );
};

export default NavigationItem;
