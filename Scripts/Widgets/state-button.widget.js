setTimeout(function () {
    $.widget("widgets.stateButton", {
        _create: function () {
            this._button = $("<button>");
            this._button.text("My state button");
            this._button.addClass("btn btn-danger");
            this._button.danger = true;
            $(this.element).append(this._button);
        },
        _setOption: function (key, value) {
            switch (key) {
                case "state":
                    console.log(value);
                    this._button.danger = !this._button.danger;

                    if (!this._button.danger) {
                        this._button.removeClass("btn-danger");
                        this._button.addClass("btn-success");
                    }
                    else {
                        this._button.removeClass("btn-success");
                        this._button.addClass("btn-danger");
                    }

                    break;
            }
        }
    });

    //$("#button1").stateButton();
    $("#button1").stateButton({ state: "changeState" });
}, 200);