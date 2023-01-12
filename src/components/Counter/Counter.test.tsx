import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import {list} from "../App/tests/App.helpers.test";
import {countOfStats} from "../App/App.helpers";

import Counter from "./Counter";

   test('test attribute count', ()=>{
       render(<Counter countOfStats={countOfStats(list)}/>);
       expect(screen.getByText('Total: 3')).toBeInTheDocument();
       expect(screen.getByText('Completed: 2')).toBeInTheDocument();
       expect(screen.getByText('Important: 1')).toBeInTheDocument();
   });

