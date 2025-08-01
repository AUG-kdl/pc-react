import config from '../../commons/config';



export default config({
        ajax: true,
        title: '主页',
        route: true
    },
    function Home() {
        return (
            <div>主页</div>
        );
    });
