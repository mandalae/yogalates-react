import React from 'react';

const menuSorter = (a, b) => {
    return parseInt(a.M.index.N, 10) - parseInt(b.M.index.N, 10);
};

export default class MenuComponent extends React.Component{
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu() {
        this.setState({ showMenu: true });
    }

    closeMenu() {
        this.setState({ showMenu: false });
    }

    render(){
        console.log(this.props);
        if (!this.props.Item)
            return <div/>;
        const menuItems = this.props.Item.items.L.sort(menuSorter).map((menuItem) => {
            if (menuItem.M.target.L){
                const subMenuItems = menuItem.M.target.L.sort(menuSorter).map(subMenuItem => {
                    return <li key={subMenuItem.M.index.N}><a href={subMenuItem.M.target.S}>{subMenuItem.M.headline.S}</a></li>
                });
                return (
                    <li key={menuItem.M.index.N} onMouseEnter={this.showMenu} onMouseLeave={this.closeMenu}>
                        <a href="#mouseover">{menuItem.M.headline.S}</a>
                        {
                            this.state.showMenu ? (
                                <ul className="slider">
                                    {subMenuItems}
                                </ul>
                            ) : ( null )
                        }
                    </li>
                )
            } else {
                return <li key={menuItem.M.index.N}><a href={menuItem.M.target.S}>{menuItem.M.headline.S}</a></li>
            }
        });
        return (
            <nav>
              <ul>
                {menuItems}
              </ul>
            </nav>
        )
    }
}
