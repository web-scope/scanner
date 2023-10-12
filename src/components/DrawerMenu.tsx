import { Drawer } from '@mui/material';
import type { FC } from 'react';

interface DrawerMenuProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (close: boolean) => void;
}

const DrawerMenu: FC<DrawerMenuProps> = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMenuProps) => {
  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      PaperProps={{ className: 'w-1/2' }}
    >
      <div className="flex flex-col justify-start gap-4 px-4">
        <p>Menu</p>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
