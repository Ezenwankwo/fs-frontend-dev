<template>
    <div className='sidebar' id='sidebar'>

        <div className="sd">
            <div className="main_sidenav">
                <header>
                    <nav>
                        <a href='' className='logo_a'> <img src="~/assets/logo.png" alt="wame" className='logo' /></a>
                        <i className="x ii material-icons" id='x' onClick={sidebarClose}>close</i>
                    </nav>
                </header>

                <div className="nav_items">
                    <span className="sp">
                        <a to="/" className='a' onClick={sidebarClose}>Home <i
                            className="material-icons">navigate_next</i></a>
                    </span>
                    <span className="sp">
                        <a to="/blog_index" className='a'>Our blog <i className="material-icons">navigate_next</i></a>
                    </span>
                    <span className="sp">
                        <a to="/seller_up" className='a'>Become a seller <i className="material-icons">navigate_next</i>
                        </a>
                    </span>
                    <span className="sp">
                        <a to="/" className='a'>P2P marketplace<i className="material-icons">navigate_next</i></a>
                    </span>
                    <span className="sp">
                        <a to="/contactus" className='a'>Contact us</a>
                    </span>
                    <span className="sp">
                        <a to="/listings" className='a'>All currency listings</a>
                    </span>
                    <span className="sp">
                        <a to="" className='a'>Our blog <i className="material-icons">navigate_next</i></a>
                    </span>
                    <div className="st">
                        <span className="sp1">
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-instagram"></i></a>
                        </span>
                        <span className="sp2">
                            <a href="">Terms and conditions. Privacy Policy</a>
                            <a href="">&copy; All rights reserved. Finstack 2022.</a>
                        </span>
                    </div>
            </div>

            <div className="in">
                <a to="/login" className="a">Sign in <i className="material-icons">chevron_right</i></a>
            </div>
        </div>

        <div className="products">

        </div>
    </div>


</div></template>

<style scoped>
.sidebar{
    display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 100vh;
    /* background-color: rgba(129, 129, 129, 0.6); */
    top: -110%;
    /* top: 0; */
    left: 0;
    transition:  300ms;
    /* background-color: black; */
    /* border: solid brown; */
    /* margin: 0 auto; */
    padding: 0 7%;
}

.sidebar nav{
    /* border: solid 5px blue; */
    width: 100%;
    margin: 0 auto;
    position: static;
    height: 70px !important;
    backdrop-filter: 0;
    box-shadow: none;
  box-shadow: 5px -1px 10px -5px rgb(168, 168, 168);

    
}


.sidebar .sd{
    display: flex; flex-direction: row; align-items: center; justify-content: flex-start;
    width: 100%;
    height: 100%;
    /* margin-top: 100px; */
    padding: 0;
    /* background-color: rgb(247, 247, 247); */
    background-color: white;
    margin: 15px 0;
    border-radius: 10px;
    overflow: hidden;
    border: solid 5px white;
    box-shadow: 0 0 3px 1px rgb(128, 128, 128, 0.1);
    box-shadow: 0px 0px 30px 10px rgba(130, 130, 130, 0.3);
   
    position: relative;
}


#x{
    display: block !important;
    cursor: pointer;
}

.sidebar .products{
   width: 100%;
   height: 100%;
   /* position: absolute; */
   background-color: blue;
   position: relative;
   z-index: 2;
   right: -100%;
}

.sidebar .sd .main_sidenav{
    display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
}


.sidebar .main_sidenav .nav_items{
    width: 100%;
    height: 100%;
    display: flex; align-items: center; justify-content: flex-start;
    flex-direction: column;
    margin-top: auto;
    padding: 10px 0;
    /* border: solid; */
    overflow-x: scroll;
}

.sidebar .main_sidenav .nav_items .sp{
    width: 100%;
    display: inline-block;
}

.sidebar .main_sidenav .nav_items .sp .a{
    width: 100%;
    padding: 20px 7%;
    font-weight: 600;
    display: flex; align-items: center; justify-content: space-between;
    color: #3f4b66;
    font-size: 15px;
    flex-direction: row;
}

.sidebar .main_sidenav .nav_items .sp+.sp::before{
    content: '';
    border-bottom: 1.5px solid rgba(206, 206, 206, 0.2);
    /* border-spacing: 10px; */
    border-bottom-style: dashed;
    /* border-inline-style:; */
    /* border-style:ridge; */
    display: block;
    margin: 0 auto;
}

.sidebar .main_sidenav .nav_items .st{
    width: 100%;
    margin-top: auto;
    display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end;
    /* border: solid; */
    padding: 0 7%;
}

.sidebar .main_sidenav .nav_items .st .sp1{
    width: 100%;
    display: flex; justify-content: left; align-items: center; flex-direction: row; gap: 10px;
}

.sidebar .main_sidenav .nav_items .st .sp1 a i{
    display: flex; align-items: center; justify-content: center;
    height: 32px; width: 32px;
    font-size: 16px;
box-shadow: 0 0 8px 1px rgb(47, 103, 250, 0.2);
    border-radius: 100%; background-color: #2F67FA; color: white;
}

.sidebar .main_sidenav .nav_items .st .sp2{
    width: 100%;
    display: flex; justify-content: left; align-items: center; 
    margin-top: 15px;
    flex-wrap: wrap;
    margin-bottom: 5px;
    gap: 10px;
}

.sidebar .main_sidenav .nav_items .st .sp2 a{
    display: flex; justify-content: left; align-items: center; flex-direction: row; gap: 5px;
    color: #3f4b66;
    font-size: 14px;
}

.sidebar .main_sidenav .in{
    width: 100%;
    display: flex; align-items: center; justify-content: center;
    flex-direction: row;
    margin-top: auto;
    padding: 10px 0;
   background-color: rgba(245, 245, 245, 0.7);

}

.sidebar .main_sidenav .in .a{
    padding: 8px 20px;
    border-radius: 30px;
    background-color: #2F67FA;
    color: white;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 0 8px 3px rgb(47, 103, 250, 0.2);
    display: flex; align-items: center; justify-content: center; flex-direction: row;
    gap: 5px;
    /* border: solid; */
}

.sidebar .main_sidenav .in .a i{
   color: white;
   font-size: 18px;
   /* background-color: rgb(247, 247, 247); */

}


@media screen and (max-width: 1000px) {
    .sidebar .main_sidenav .nav_items .sp .a{
        padding: 20px 5%;
    }
}

@media screen and (max-width: 600px) {
    .sidebar .main_sidenav .nav_items .sp .a{
        padding: 20px 7%;
    }
}
</style>