import Box from "@mui/material/Box";
import PageBlock from "../page-block";
import InventoryForm from "../../inventoryForm";

export default function Block5() {
    return (
        <PageBlock>
            <Box id="cargo">
                <InventoryForm />
            </Box>
        </PageBlock>
    );
}
