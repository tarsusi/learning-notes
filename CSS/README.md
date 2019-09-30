# My notes about CSS

- **strong** tag for making texts bold

  - <strong>Strong Text</strong>

- **u** tag for making texts underline

  - <u>Underline Text</u>

- **em** tag for making texts italic

  - <em>Italic Text</em>

- **s** tag for making texts strike-through

  - <s>Strike through Text</s>

- **hr** add a horizontal line across the width of its container.

  - <hr />

## Linear Gradient

`linear-gradient(gradient_direction, color_1, color_2, ...)`

- **gradient_direction** specifies the direction from starter color to last color. Example is `90deg`

  - `linear-gradient(90deg, red, green)`

## Animation

- **animation-name** property sets for animation name declared in keyframes

- **animation-duration** property sets the duration of animation.(`1s, 500ms etc.`).

- **animation-fill-mode** property specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).

- **animation-iteration-count** property control how many times the nation will loop. It can be any number or **infinite** (`1,5,100,infinite`).

- **animation-timing-function** property controls how quickly animation element changes over the duration(`ease, ease-in, ease-out, linear etc.`).

## Accessibility

For more detail look at the [freecodecamp section](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility)

- use `alt` property for **img** html element. Per HTML5 specification, this is now considered _mandatory_.

- the order **h1** to **h6** tags is important. In each page there should be only one **n1** element.

- use new html5 elements: **main**, **header**, **footer**, **nav**, **article**, **section**, **audio**, **figure**

- improve form input accessibility with using **label** element. And its **for** attribute. This attributes should be same with the `id` of input element.

- **fieldset** tag surrounds the entire grouping radio buttons. And it often uses a **legend** tag to provide a description for the group.

- **time** tag with **datetime** attribute standardize times.

  - `<time datetime="2019-09-29">Sunday, September 29</time>`

- While using **a** tag, the link text should be very descriptive not like `Click Here` or `Read more`

## GRID Design

- To use grid system, give container element `display: grid`

- `grid-template-columns` takes the number of paremeters that indicates the number of columns in grid, and the value of each parameter indicates the width of each column.

  - `grid-template-columns: 50px 40px` for example, indicates that there are 2 columns and first column has 50px wide and second column has 40px wide

- `grid-template-rows` takes the number of paremeters that indicates the number of rows in grid, and the value of each parameter indicates the height of each row.

  - `grid-template-rows: 50px 40px` for example, indicates that there are 2 rows and first row has 50px height and second row has 40px height

- `grid-column-gap` indicates the gap between grid columns.

  - `grid-column-gap: 10px`, for example indicates there is 10px gap between each column

- `grid-row-gap` indicates the gap between grid rows.

  - `grid-row-gap: 10px`, for example indicates there is 10px gap between each row

- `grid-gap: 10px 20px` is a shorthand for 10px gap for rows and 20px gap for columns

- `grid-template-areas`, for tagging the cells in grid.

  ```css
  grid-template-areas:
    "header header header"
    "advert content content"
    "footer footer footer";
  ```

  - This example is for 3x3 grid. Each string represent each row.

- `grid-area` is used for giving an cell to use all grid area by its value.

- `repeat` function can be used width `grid-template-rows` or `grid-template-columns` to repeat repeat values.

  - `grid-template-rows: repeat(100, 50px);` is equals to creating 100 rows with 50px wide.

- `minmax(minValue, maxValue)` can be used for limit size of cell
