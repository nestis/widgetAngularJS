Widget load system built using AngularJS.

HOW TO USE

To define a new widget just insert a new HTML element with the attribute "data-widget". That will make that the element will be process as a widget.
The widgets presents various settings defined as attributes too:

- data-widget: Defines the element as a widget. Its value must be a valid JSON String with the following parameters:
class: Defines what kind of widget will be render. As for now, only three options available. chart, grid and map.
type: Defines specific data for the widget. Available only for chart and map. Chart presents the next options: area, bar, and line. In a Chart widget this parameter is mandatory. Map can be "geolocation" o not (empty).
config: Defines a object for getting a specific config for the widget load.

- data-widget-object: If the widget needs to make an AJAX request, this is where to specify the URL. Two parameters, url and param.

- data-widget-title: Title given to the widget. This value will be stored in the $scope with the name "title". 

- data-widget-template: If defined, the widget will use the TemplateService to lookup the HTML template for the widget.

- data-widget-name: Name given to the div that will render the widget.

- data-widge-pane: Specifies the number on the tab in which is the widget.


