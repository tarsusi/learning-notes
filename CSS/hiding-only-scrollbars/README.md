To hide the scrollbars, but still be able to keep scrolling, you can use the following code:

```css
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
```

taken from [here](https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp)
