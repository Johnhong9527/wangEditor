/**
 * @description parse html test
 * @author wangfupeng
 */

import { $ } from 'dom7'
import { parseStyleHtml } from '../../../../packages/basic-modules/src/modules/indent/parse-style-html'

describe('indent - parse style', () => {
  it('parse style', () => {
    const $p = $('<p style="text-indent: 2em;"></p>')
    const p = { type: 'paragraph', children: [{ text: 'hello' }] }

    // parse
    const res = parseStyleHtml($p, p)
    expect(res).toEqual({
      type: 'paragraph',
      indent: '2em',
      children: [{ text: 'hello' }],
    })
  })
})
