
export function getRowData(serviceRespRowData = []) {
    let rowData = [];
    serviceRespRowData && serviceRespRowData.forEach((responseData) => {
      let customerObject = {
        commodity: "",
        part_family: "",
        track: "",
        deck: "",
        on_track: "",
        pick_buffer: "",
        ship_buffer: "",
        last_tls: "",
        last_tls_hover: "",
        last_tls_status: "",
        last_picked: "",
        last_picked_hover: "",
        last_picked_status: "",
        last_dispatched: "",
        last_dispatched_hover: "",
        last_dispatched_status: "",
        stillagesArray: "",
        // unplan_tls: "",
        // unplanned: "",
        // planned: "",
        // picking: "",
        // picked: "",
        // staged: "",
        // loaded: "",
        // dispatched: "",
        pick_buffer_status: "",
        ship_buffer_status: "",
        pick_buffer_total: "",
        ship_buffer_total: "",
        has_Error: "",
        refresh:'',
        update_date:'',
        errorList:''
      };

    customerObject.pick_buffer_total = responseData.pick_buffer_total
    customerObject.ship_buffer_total = responseData.ship_buffer_total
    customerObject.refresh = responseData.refresh
    customerObject.update_date = responseData.update_date

    //Iterating Commodities from mock data
    responseData.commodities.forEach((commoditiesArray) => {
        customerObject.commodity = commoditiesArray.name;
        customerObject.part_family = commoditiesArray.part_family;
        customerObject.track = commoditiesArray.track;
        customerObject.deck = commoditiesArray.deck;
        customerObject.on_track = commoditiesArray.on_track_tls;

        customerObject.last_tls = commoditiesArray.last_tls;
        customerObject.last_tls_hover = commoditiesArray.last_tls_hover;
        customerObject.last_tls_status = commoditiesArray.last_tls_status;

        customerObject.last_picked = commoditiesArray.last_picked;
        customerObject.last_picked_hover = commoditiesArray.last_picked_hover;
        customerObject.last_picked_status = commoditiesArray.last_picked_status;

        customerObject.last_dispatched = commoditiesArray.last_dispatched;
        customerObject.last_dispatched_hover = commoditiesArray.last_dispatched_hover;
        customerObject.last_dispatched_status = commoditiesArray.last_dispatched_status;
        customerObject.unplan_tls = commoditiesArray.unplan_tls;

        customerObject.pick_buffer = commoditiesArray.pick_buffer;
        customerObject.ship_buffer = commoditiesArray.ship_buffer;
        customerObject.pick_buffer_status = commoditiesArray.pick_buffer_status;
        customerObject.ship_buffer_status = commoditiesArray.ship_buffer_status;

        customerObject.has_Error = commoditiesArray.has_Error;
        customerObject.errorList = commoditiesArray.errorList;

        //Iterating Stillages from planned, picking, picked, staged and dispatched
        customerObject.stillagesArray = commoditiesArray.stillages;

        //console.log('stillages data.....', stillagesArray)
        // stillagesArray.forEach((stillagesObject) => {

        //   customerObject.unplanned = stillagesObject.unplanned;
        //   customerObject.planned = stillagesObject.planned;
        //   customerObject.picking = stillagesObject.picking;
        //   customerObject.picked = stillagesObject.picked;
        //   customerObject.staged = stillagesObject.staged;
        //   customerObject.loaded = stillagesObject.loaded;
        //   customerObject.dispatched = stillagesObject.dispatched;
        // });
      });
      rowData.push(customerObject);
    });

    return rowData;
  };

