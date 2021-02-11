export const COLUMN_DEF = [
    {
      headerName: "Commodity",
      field: "commodity",
      flex: 3,
      sortable: true,
      cellStyle: (params) =>
      params.data.has_Error === true
        ? {
            borderLeft: "4px #d40612 solid",
          }
        : null,
    },
    {
      headerName: "Part Family",
      field: "part_family",
      sortable: true,
      cellRenderer: 'partFamilyRenderer',
      rowSelecion: 'single',
      onSelectionChanged: (event) => {
        console.log('event values...', event)
      },
    },
    {
      headerName: "Track",
      field: "track",
      sortable: true,
    },

    {
      headerName: "Deck",
      field: "deck",
      sortable: true,
    },

    {
      headerName: "Last TLS",
      field: "last_tls",
      tooltipField: "last_tls",
      tooltipComponent: "lastTLSTooltip",
      cellStyle: (params) =>
      params.data.last_tls_status === "GREEN"
          ? {
              background: "#00FD00",
          }
          : {
              background: "#d40612",
              color: "#FFFFFF",
          }
    },

    {
      headerName: "Last Picked",
      field: "last_picked",
      tooltipField: "last_picked",
      tooltipComponent: "lastPickedTooltip",
      cellStyle: (params) =>
      params.data.last_picked_status === "GREEN"
        ? {
            background: "#00FD00",
          }
        : {
            background: "#d40612",
            color: "#FFFFFF",
          },
    },

    {
      headerName: "Last DISP",
      field: "last_dispatched",
      tooltipField: "last_dispatched",
      tooltipComponent: "lastDispTooltip",
      cellStyle: (params) =>
      params.data.last_disp_status === "GREEN"
        ? {
            background: "#00FD00",
          }
        : {
            background: "#d40612",
            color: "#FFFFFF",
          }
    },
    {
      headerName: "Unplan TLS",
      field: "unplan_tls"
    },
    {
      headerName: "On Track",
      field: "on_track",
    },

    {
      headerName: "Stillages",
      flex:8,
      field: "stillages",
      autoHeight: true,
      cellRenderer: "stillageRenderer"

      // children: [
      //   {
      //     headerName: "UNPLANNED",
      //     field: "unplanned",
      //     cellRenderer: "stillageRenderer",
      //     type: "stillagesGroup",
      //     autoHeight: true ,
      //     flex:6,
      //     headerComponent: "stillageHeader",
      //   },
      //   {
      //     headerName: "PLANNED",
      //     field: "planned",
      //     cellRenderer: "stillageRenderer",
      //     type: "stillagesGroup",
      //     autoHeight: true ,
      //     flex:6,
      //     headerComponent: "stillageHeader",
      //   },
      //   {
      //     headerName: "PICKING",
      //     field: "picking",
      //     cellRenderer: "stillageRenderer",
      //     type: "stillagesGroup",
      //     flex:6,
      //     headerComponent: "stillageHeader",
      //   },
      //   {
      //     headerName: "PICKED",
      //     field: "picked",
      //     cellRenderer: "stillageRenderer",
      //     type: "stillagesGroup",
      //     flex:6,
      //     headerComponent: "stillageHeader",
      //   },

      //   {
      //     headerName: "STAGED",
      //     field: "staged",
      //     cellRenderer: "stillageRenderer",
      //     type: "stillagesGroup",
      //     headerComponent: "stillageHeader",
      //     flex:6,
      //   },
      //   {
      //     headerName: "LOADED",
      //     field: "loaded",
      //     cellRenderer: "stillageRenderer",
      //     type: "stillagesGroup",
      //     headerComponent: "stillageHeader",
      //     flex:6,
      //   },

      //   {
      //     headerName: "DISPATCHED",
      //     field: "dispatched",
      //     cellRenderer: "stillageRenderer",
      //     type: "stillagesGroup",
      //     headerComponent: "stillageHeader",
      //     flex:6,
      //   },
      // ],
    },

    {
      headerName: "Pick Buffer",
      field: "pick_buffer",
          cellStyle: (params) =>
            params.data.pick_buffer_status === "GREEN"
              ? {
                  background: "#00FD00",
                }
              : {
                  background: "#d40612",
                  color: "#FFFFFF",
              }
    },

    {
      headerName: "Ship Buffer",
      field: "ship_buffer",
      cellStyle: (params) =>
      params.data.ship_buffer_status === "GREEN"
          ? {
              background: "#00FD00",
          }
          : {
              background: "#d40612",
              color: "#FFFFFF",
          }
    },
  ]