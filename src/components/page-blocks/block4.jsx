import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import PageBlock from '../page-block';
import img from '../../assets/img/packaging.jpg';

export default function Block4() {
    return (
        <PageBlock>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: 'center',
                    padding: '3%',
                }}
            >
                <Box sx={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    width: {xs: '100%', md: '400px'},
                    height: {xs: '300px', md: '500px', lg: '600px'}
                }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: {xs: '100%', md: '50%'},
                        paddingLeft: '3%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            fontSize: {xs: '16px', md: '28px'},
                        }}
                    >
                        <Typography
                            variant="h2"
                            noWrap
                        >
                            Packaging requirements for humanitarian aid consignments
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            paddingTop: '1%',
                            fontSize: {xs: '16px', md: '20px', lg: '22px'},
                            width: '100%',
                        }}
                    >
                        <List>
                            <ListItem>
                                1. All shipments must be placed on pallets (not higher then 160 cm with the load) and securely packed.
                            </ListItem>
                            <ListItem>
                                2. All shipments must have bills of lading or invoices or a list of the goods.
                            </ListItem>
                            <ListItem>
                                3. Each pallet must be labeled with the load and the number of pieces per pallet.
                            </ListItem>
                            <ListItem>
                                4. If the cargo has a specific addressee in Ukraine, the consignee must be indicated on the invoice or list of the goods and on each pallet.
                            </ListItem>
                            <ListItem>
                                5. For the addressee in Ukraine, the address, contact telephone number, e-mail and, if possible, a contact person must be indicated.
                            </ListItem>
                            <ListItem>
                                6. The day before the shipment fill in the form below.
                            </ListItem>
                            <ListItem>
                                7. Shipments are accepted only from 8.00 to 15.00 CET (Central European Time).
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </PageBlock>
    );
}
