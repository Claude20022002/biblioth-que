import { Pagination } from "@mui/material";
import React from "react";

export default function PaginationOutlined({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage,
}) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    // Ne rendre la pagination que si nous avons plus d'une page
    if (totalPages <= 1) return null;

    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            color="primary"
            sx={{
                marginTop: "20px",
                background: "#FBF6E2",
                padding: "15px",
                boxShadow:
                    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
                borderRadius: "30px",
                width: "auto",
                margin: "auto",
            }}
        />
    );
}
