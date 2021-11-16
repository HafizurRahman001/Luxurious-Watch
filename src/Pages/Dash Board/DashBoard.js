import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Box } from '@mui/system';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import MyOrder from '../My Orders/MyOrder';
import Review from '../Review/Review';
import ManageAllOrders from '../../Components/Manage All Orders/ManageAllOrders';
import MakeAdmin from '../Make Admin/MakeAdmin';
import AddNewProduct from '../Add New Product/AddNewProduct';
import useAuth from '../../Hooks/useAuth';
import ManagementProducts from '../../Components/Management Products/ManagementProducts';
import dashBoardLogo from '../../images/dashboard-logo2.jpg';
import AdminRoute from '../../Components/Admin Route/AdminRoute';
import Payment from '../../Components/Payment/Payment';

const drawerWidth = 240;

const DashBoard = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logOut, admin, isLoading } = useAuth();


    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const activeStyle = {
        color: 'blue',
        fontWeight: 'bold'
    };

    // waiting browser until data loaded successfully
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    // dashboard drawer section
    const drawer = (
        <div data-aos="fade-down">
            <Toolbar style={{ backgroundColor: '#000000' }}>
                <div style={{ width: '100%' }}>
                    <img style={{ width: '100%', height: '64px' }} src={dashBoardLogo} alt="" />
                </div>
            </Toolbar>

            <Divider />
            <Box>
                <Typography style={{ backgroundColor: '#1976D2', color: 'white', fontWeight: 'bold', padding: '5px 0px' }} variant='h6'>
                    USER DASHBOARD
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'left', paddingLeft: '10px', cursor: 'pointer' }}>
                <List style={{ "&:hover": { backgroundColor: 'yellow' } }}>
                    <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={`${url}`}><i className="fab me-2 fa-paypal"></i> PAY</NavLink>
                </List>
                <List>
                    <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={`${url}/my-order`}><i className="fab me-2 fa-first-order"></i> MY ORDERS</NavLink>
                </List>
                <List>
                    <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={`${url}/review`}><i className="fas me-2 fa-edit"></i> REVIEW</NavLink>
                </List>
            </Box>
            <Divider />
            {admin && <Box>
                <Box>
                    <Typography style={{ backgroundColor: '#1976D2', color: 'white', fontWeight: 'bold', padding: '5px 0px' }} variant='h6'>
                        ADMIN DASHBOARD
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'left', paddingLeft: '10px', cursor: 'pointer' }}>
                    <List>
                        <List>
                            <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manage-all-orders`}><i className="fas me-2 fa-tasks"></i> MANAGE ALL ORDERS</NavLink>
                        </List>
                        <List>
                            <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={`${url}/add-new-product`}><i className="fas me-2 fa-plus-square"></i> ADD NEW PRODUCT</NavLink>
                        </List>
                        <List>
                            <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manage-products`}><i className="fas me-2 fa-plus-square"></i> MANAGE PRODUCTS</NavLink>
                        </List>
                        <List>
                            <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={`${url}/make-admin`}><i className="fas me-2 fa-users-cog"></i> MAKE ADMIN</NavLink>
                        </List>
                    </List>
                </Box>
            </Box>}
            <Divider />
            <Box style={{ position: 'absolute', bottom: '0px', paddingLeft: '20px', cursor: 'pointer', backgroundColor: 'crimson', width: '100%', color: 'white' }}>
                <List style={{ fontWeight: 'bold' }} onClick={logOut}>
                    LOGOUT <i className="fas ms-2 fa-sign-out-alt"></i>
                </List>
            </Box>
        </div >
    );


    return (

        //dash board display component section
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                            <i className="fas me-2 fa-home"></i>HOME
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'white', margin: '0px 20px' }} to='/about'>
                            <i className="fas pe-2 fa-award"></i>ABOUT
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/all-products'>
                            <i className="fab pe-2 fa-buffer"></i>EXPLORE
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box>
                    <Switch>
                        <Route exact path={path}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/my-order`}>
                            <MyOrder />
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review />
                        </Route>
                        <AdminRoute path={`${path}/manage-all-orders`}>
                            <ManageAllOrders />
                        </AdminRoute>
                        <AdminRoute path={`${path}/add-new-product`}>
                            <AddNewProduct />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-products`}>
                            <ManagementProducts />
                        </AdminRoute>
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin />
                        </AdminRoute>
                    </Switch>
                </Box>
            </Box>
        </Box>
    );
};

export default DashBoard;