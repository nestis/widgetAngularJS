Widget load system built using AngularJS.

HOW TO USE

To define a new widget just insert a HTML element with the attribute "data-widget". This will make AngularJS process the element as a Widget.
The widgets presents various settings defined as attributes too:

- data-widget: Defines the element as a widget. Its value must be a valid JSON String with the following parameters:
class: Defines what kind of widget will be rendered. As for now, only three options available. chart, grid and map.
type: Defines specific data for the widget. Available only for chart and map. Chart presents the next options: area, bar, and line. In a Chart widget this parameter is mandatory. Map can be "geolocation" o not (empty).
config: Defines a object for getting a specific config for the widget load.

- data-widget-object: If the widget needs to make an AJAX request, this is where you specify the URL. Two parameters, url and param.

- data-widget-title: Title given to the widget. This value will be stored in the $scope with the name "title". 

- data-widget-template: If defined, the widget will use the TemplateService to lookup the HTML template for the widget.

- data-widget-name: ID given to the div that will render the widget.

- data-widge-pane: Specifies the number of the tab in which is placed the widget.

- data-widget-controller: Controller used by the widget. This controller must prototype-inherit from WidgetController and define a function named processWidget(type, listener). Since this specifies the widget's controller, is mandatory.

- data-widget-lib: If the widget needs a thridparty library, this will contain the URL to the resource. The file is requested by Require, so is nccesary some attention on the absolute or relative path.



In case you want to introduce new widgets, these are the steps to do it:
- Do some HTML...
- Create a controller that prototype-inherit from WidgetController. This controller must also define a function named processWidget. In this function is where your logic to obtain the widget data should be. Because this function will be called on the event of clicking on the widget's tab (see angular-ui-tabs), it accepts a listener as second argument. This listener is the result of $scope.$on function, so you can executed it to delete the event's subcription or not. The first argument is the type of the widget, but is not used right now.
- Write the HTML with the attributes specified above, and dont forget to load your controller on app.js. That's it!

