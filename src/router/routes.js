const routes = [
    {
        name:'BIView',
        path:'/BIView',
        component:()=>import('@/components/BIView')
    },
    {
        name:'tableView',
        path:'/tableView',
        component:()=>import('@/components/tableView')
    },
    {
        name:'fileManage',
        path:'/fileManage',
        component:()=>import('@/filemanage/fileManage')
    },
    {
        name:'gameView',
        path:'/gameView',
        component:()=>import('@/views/gameView')
    },
]

export default routes
