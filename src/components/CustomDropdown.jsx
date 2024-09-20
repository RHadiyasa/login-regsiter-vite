import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const CustomDropdown = ({ name, inheren, kpmr, linkInheren, linkKpmr }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>{name}</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem
          textValue="Link Satu"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            className="flex w-full"
            to={linkInheren}
            target="_blank"
          >
            {inheren}
          </Link>
        </DropdownItem>
        <DropdownItem
          textValue="Link Satu"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            className="flex w-full"
            to={linkKpmr}
            target="_blank"
          >
            {kpmr}
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomDropdown;
