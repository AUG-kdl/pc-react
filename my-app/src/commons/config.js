const config = (init, Com) => {
    const {
        title = '匿名',
        modalFun = false,
        ajax = false,
        route = false,
    } = init;

    return (props)=> <Com {...init} {...props}/>;
};
export default config;
