import * as React from 'react';
import { Button, Divider, List, ListItem } from 'react95';

export default function Menu() {
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {open && (
                <List horizontalAlign="left" verticalAlign="bottom" open={open} onClick={handleClose}>
                    <ListItem>👨‍💻 Create Account</ListItem>
                    <ListItem>🔒 Log In</ListItem>
                    <Divider />
                    <ListItem disabled>🔙 Logout</ListItem>
                </List>
            )}
            <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
                Start
            </Button>
        </div>
    );
}