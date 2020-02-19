module.exports = [
    {
        path: '/',
        exact: true,
        componentName: 'MainPage'
    },
    {
        path: '/production',
        exact: true,
        componentName: 'Production'
    },
    {
        path: '/production/conveyor',
        exact: true,
        componentName: 'DetailedListPage',
        active: 1
    },
    {
        path: '/production/metalStructures',
        exact: true,
        componentName: 'DetailedListPage',
        active: 2
    },
    {
        path: '/production/tank',
        exact: true,
        componentName: 'DetailedListPage',
        active: 3
    },
    {
        path: '/production/chains',
        exact: true,
        componentName: 'DetailedListPage',
        active: 4
    },
    {
        path: '/production/services',
        exact: true,
        componentName: 'DetailedListPage',
        active: 5
    },
    {
        path: '/production/repair',
        exact: true,
        componentName: 'DetailedListPage',
        active: 6
    },
    {
        path: '/production/conveyor/:id',
        exact: true,
        componentName: 'DetailedInformation'
    },
    {
        path: '/production/metalStructures/:id',
        exact: true,
        componentName: 'DetailedInformation'
    },
    {
        path: '/production/tank/:id',
        exact: true,
        componentName: 'DetailedInformation'
    },
    {
        path: '/production/chains/:id',
        exact: true,
        componentName: 'DetailedInformation'
    },
    {
        path: '/production/services/:id',
        exact: true,
        componentName: 'DetailedInformation'
    },
    {
        path: '/production/repair/:id',
        exact: true,
        componentName: 'DetailedInformation'
    },
    {
        path: '/contactUs',
        exact: true,
        componentName: 'ContactUs'
    },
    {
        path: '/aboutUs',
        exact: true,
        componentName: 'AboutUs'
    }
];