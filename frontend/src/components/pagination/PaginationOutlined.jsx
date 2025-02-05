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

    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            color="primary"
            sx={{ marginTop: "20px" }}
        />
    );
}
