import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import SoleilRegularWoff from './../assets/Soleil-Regular.woff'
import SoleilRegularEot from './../assets/Soleil-Regular.eot'
import SoleilRegularotf from './../assets/Soleil-Regular.otf'
import SoleilRegularttf from './../assets/Soleil-Regular.ttf'
import SoleilRegularsvg from './../assets/Soleil-Regular.svg'
import SoleilBoldWoff from './../assets/Soleil-Bold.woff'
import SoleilBoldEot from './../assets/Soleil-Bold.eot'
import SoleilBoldotf from './../assets/Soleil-Bold.otf'
import SoleilBoldttf from './../assets/Soleil-Bold.ttf'
import SoleilBoldsvg from './../assets/Soleil-Bold.svg'

injectGlobal`
  ${normalize}
  @font-face {
    font-family: Soleil;
    src: url(${SoleilRegularEot});
    src: url(${SoleilBoldEot});
    src: url(${SoleilRegularttf})  format('truetype'),
      url(${SoleilRegularEot + '#iefix'}) format('embedded-opentype'),
      url(${SoleilRegularWoff}) format('woff'),
      url(${SoleilRegularotf}) format('opentype'),
      url(${SoleilRegularsvg + '#svgFontName'}) format('svg'),
      url(${SoleilBoldttf})  format('truetype'),
      url(${SoleilBoldEot + '#iefix'}) format('embedded-opentype'),
      url(${SoleilBoldWoff}) format('woff'),
      url(${SoleilBoldotf}) format('opentype'),
      url(${SoleilBoldsvg + '#svgFontName'}) format('svg');
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    line-height: 1.5;
    font-size: 100%;
  }
  html, body, body > #app {
    font-family: Soleil, sans-serif;
    color: #696D8C;
    height: 100%;
  }
`
