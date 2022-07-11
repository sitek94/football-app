# Football App

Messing around and experimenting with:
- [React Router v6](https://reactrouter.com/docs/en/v6)
- Implementing breadcrumbs using [use-react-router-breadcrumbs](https://github.com/icd2k3/use-react-router-breadcrumbs)
- [Mock Service Worker](https://mswjs.io/)
- [React.Suspense](https://17.reactjs.org/docs/concurrent-mode-suspense.html)  

## API and data

I'm using data from [API-FOOTBALL](https://www.api-football.com/). However, for free there are 
only 100 requests available each day, so I saved some data, and I'm serving it using `msw`. It's definitely not something
you would do in production, but for such a simple project it's absolutely fine.
