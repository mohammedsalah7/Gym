import React from "react";
// import "./style.css";
// import icon from "../../images/line-dec.png";
import { Table, TBody, Tr, Td } from "./styleTable";
export default function Schedules() {
  return (
    <div>
      <Table>
        <TBody>
          <Tr>
            <Td class="day-time">Fitness Class</Td>
            <Td class="monday ts-item show" data-tsmeta="monday">
              10:00AM - 11:30AM
            </Td>
            <Td class="tuesday ts-item" data-tsmeta="tuesday">
              2:00PM - 3:30PM
            </Td>
            <Td>William G. Stewart</Td>
          </Tr>
          <Tr>
            <Td class="day-time">Muscle Training</Td>
            <Td class="friday ts-item" data-tsmeta="friday">
              10:00AM - 11:30AM
            </Td>
            <Td
              class="thursday friday ts-item"
              data-tsmeta="thursday"
              // data-tsmeta="friday"
            >
              2:00PM - 3:30PM
            </Td>
            <Td>Paul D. Newman</Td>
          </Tr>
          <Tr>
            <Td class="day-time">Body Building</Td>
            <Td class="tuesday ts-item" data-tsmeta="tuesday">
              10:00AM - 11:30AM
            </Td>
            <Td class="monday ts-item show" data-tsmeta="monday"></Td>
            <Td>Boyd C. Harris</Td>
          </Tr>
          <Tr>
            <Td class="day-time">Yoga Training Class</Td>
            <Td class="wednesday ts-item" data-tsmeta="wednesday">
              10:00AM - 11:30AM
            </Td>
            <Td class="friday ts-item" data-tsmeta="friday">
              2:00PM - 3:30PM
            </Td>
            <Td>Hector T. Daigle</Td>
          </Tr>
          <Tr>
            <Td class="day-time">Advanced Training</Td>
            <Td class="thursday ts-item" data-tsmeta="thursday">
              10:00AM - 11:30AM
            </Td>
            <Td class="wednesday ts-item" data-tsmeta="wednesday">
              2:00PM - 3:30PM
            </Td>
            <Td>Bret D. Bowers</Td>
          </Tr>
        </TBody>
      </Table>
    </div>
  );
}
