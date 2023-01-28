import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

interface Props {
  query: { name?: string };
}

const Home: NextPage<Props> = ({ query }) => {
  const greetName = query.name ? query.name : 'World';

  return (
    <div>
      <div>Hello, {greetName}, from Next!</div>
    </div>
  );
};

export function getServerSideProps(ctx: NextPageContext): any {
  const query: any = {
    name: ctx.query.name || null,
  };
  return { props: { query } };
}

export default Home;
