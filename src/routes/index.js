/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    // The home route is added to client.js to make sure shared components are
    // added to client.js as well and not repeated in individual each route chunk.
    {
      path: '',
      load: () => import(/* webpackMode: 'eager' */ './home'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/new',
      load: () => import(/* webpackChunkName: 'new' */ './new'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/how-to',
      load: () => import(/* webpackChunkName: 'how-to' */ './how-to'),
    },
    {
      path: '/my-cards',
      load: () => import(/* webpackChunkName: 'my-cards' */ './my-cards'),
    },
    {
      path: '/card',
      children: [
        {
          path: '',
          load: () => import(/* webpackMode: 'eager' */ './home'),
        },
        {
          path: '/:address',
          // action: ctx => `#${console.log(ctx.params.address)}`,
          // action() {
          //   context => console.log(context.params);
          // },
          // action: console.log(address),
          load: context => import(/* webpackChunkName: 'my-cards' */ './card'),
        },
      ],
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
      // action: () => console.log('that happened'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Helios'} - www.lovelockchain.com`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
