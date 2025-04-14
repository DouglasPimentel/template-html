import "bootstrap";
import $ from "jquery";

$(() => {
  $("#clickMe").on("click", () => {
    alert("Hello from TypeScript + jQuery!");
  });

  console.log("Hello from TypeScript + jQuery!");
});
