import menus from '../data/menu-detail.json';

export function getMenuList(){
    return menus;
}

export function getMenuDetail(menuCode){
    console.log(typeof menuCode);
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}