import React, { forwardRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import { NavLink, NavLinkProps } from "react-router-dom";
import PropTypes from "prop-types";

const AppMenuItemComponentProps = {
  className: PropTypes.string,
  link: PropTypes.string
};

const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = props => {
  const { className, onClick, link, children, idCubo } = props;

  if (!link || typeof link !== "string") {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    );
  }
  let url = link + "/" + idCubo;
  const newTo = {
    pathname: url,
    param1: idCubo
  };
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => (
        <NavLink exact {...props} innerRef={ref} />
      ))}
      to={newTo}
    />
  );
};

AppMenuItemComponent.propTypes = AppMenuItemComponentProps;

export default AppMenuItemComponent;
