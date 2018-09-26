import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { activeFilterMenu } from '../actions/Submissions';
import {connect} from 'react-redux';

const TopBar = styled.div`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 77px;
  background-color: white;
  min-height: 60px !important;
`
const Logo = styled.img`
  width: 300px;
`
const FilterOptions = styled.div`
  display: flex;
  align-items: center;

` 
const styles = {
    menuButton: {
      left: 0,
      marginLeft: 10,
      marginRight: 10,
    },
};

class TopBarComponent extends PureComponent {
  static propTypes = {
    logo: PropTypes.string.isRequired
  }

  handleMenu = () => {
    this.props.activeFilterMenu()
  }

  render() {
    const { classes } = this.props;
    return ( 
      <TopBar>
        <FilterOptions>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Browser
          </Typography>
        </FilterOptions>
        <Logo src={this.props.logo}/>
      </TopBar>
    );
  }
}

const mapStateToProps = function (state) {
    return {
      activeMenu: state.MenuBar
    }
};

export default connect(mapStateToProps, { activeFilterMenu })(withStyles(styles)(TopBarComponent));

