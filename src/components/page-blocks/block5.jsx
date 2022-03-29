import Box from "@mui/material/Box";
import PageBlock from "../page-block";
import InventoryForm from "../../inventoryForm";
import Typography from "@mui/material/Typography";

export default function Block5() {
    return (
        <PageBlock>
            <Box id="cargo"
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        padding: "20px 30px",
                        fontSize: { xs: "16px", md: "28px" },
                    }}
                >
                    <Typography variant="h2">Cargo details</Typography>
                </Box>
                <InventoryForm />
            </Box>
        </PageBlock>
    );
}
