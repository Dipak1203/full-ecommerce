import React from "react";
import { Container } from "react-bootstrap";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
const Messages = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  return (
    <div className="main__content">
      <Container>
        <div style={{ height: 400, width: "50%" }}>
          <DataGrid
            {...data}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Messages;
