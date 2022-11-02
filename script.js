$(() => {
  $(document.body)
    .append($("<input>").attr("id", "newtask"))
    .append(
      $("<button>")
        .attr("id", "addtask")
        .text("ADD")
        .click((ev) => {
          $("#tasklist").append(
            $("<li>")
              .text($("#newtask").val())
              .append(
                $("<button>")
                  .text("❌")
                  .click((ev) => {
                    $(ev.target).parent().remove();
                  })
              )
              .append(
                $("<button>")
                  .attr("class", "btn-up")
                  .text("⬆️")
                  .click((ev) => {
                    $(ev.target)
                      .parent()
                      .insertBefore($(ev.target).parent().prev());
                  })
              )
              .append(
                $("<button>")
                  .attr("class", "btn-down")
                  .text("⬇️")
                  .click((ev) => {
                    $(ev.target)
                      .parent()
                      .insertAfter($(ev.target).parent().next());
                  })
              )
              .dblclick((ev) => {
                $(ev.target).attr("contenteditable", "true");
              })
          );
        })
    )
    .append($("<ul>").attr("id", "tasklist"));
});
