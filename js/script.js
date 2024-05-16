// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: May  2024
// This file contains the JS functions for index.html

"use strict"

let clicks = localStorage.getElementById("click-count") || 0

  function myButtonClicked () {
    clicks += 1

  document.getElementById("click-count").innerHTML = clicks

  localStorage.setItem("click-counter", clicks)
}

