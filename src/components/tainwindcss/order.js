import React from 'react';
import { Button, ButtonGroup } from "flowbite-react";
import { Card } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

const Order = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
        <Button className=''>
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button color="gray">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button color="gray">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientMonochrome="info">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientMonochrome="info">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientMonochrome="info">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientDuoTone="cyanToBlue">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Order;