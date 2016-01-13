# binette.js
A Javascript program that replaces character sequences like :-D by unicode emoticons like 😃 (U+1F603)

## Warning
This is a very early-stage version, originally for internal use

It does not contain an exhaustive list of emoji unicode characters at all, feel free to add a lot

Some characters might be poorly chosen (regarding common font support for example) and it might be relevant to replace them

## Usage
```javascript
var modifiedString = Binette.binettize(originalString);