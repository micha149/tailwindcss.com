import { IconContainer, Caption, BigText, Paragraph, Link, Widont } from '@/components/home/common'
import { GradientLockup } from '@/components/GradientLockup'
import { CodeWindow } from '@/components/CodeWindow'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/state-variants.svg'
import tokenize from '../macros/tokenize.macro'
import { forwardRef, useMemo, useRef, useState } from 'react'

const { lines } = tokenize.html(`<section class="px-6 pt-4 pb-6 space-y-4">
  <header class="flex items-center justify-between">
    <h2 class="text-lg leading-6 font-medium text-black">Projects</h2>
    <button type="button" class="flex items-center rounded-md bg-lightBlue-100 text-lightBlue-500 text-sm leading-5 font-medium px-4 py-2">
      <svg width="12" height="20" fill="currentColor" class="mr-2">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z" />
      </svg>
      New
    </button>
  </header>
  <form class="relative">
    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
    </svg>
    <input class="(input-focus)focus:border-lightBlue-300 (input-focus)focus:outline-none w-full text-sm leading-5 text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" />
  </form>
  <ul class="grid grid-cols-2 gap-4">
    <li x-for="item in items">
      <a href="#" class="(item-hover)hover:bg-lightBlue-500 (item-hover)hover:border-transparent (item-hover)hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <h3 class="(item-hover)group-hover:text-white leading-6 font-medium text-black">
          {item.title}
        </h3>
        <dl>
          <dt class="sr-only">Category</dt>
          <dd class="(item-hover)group-hover:text-lightBlue-200 text-sm leading-5 font-medium mb-4">
            {item.category}
          </dd>
          <dt class="sr-only">Users</dt>
          <dd class="flex -space-x-2">
            <img x-for="user in item.users" :src="user.avatar" :alt="user.name" width="48" height="48" class="w-7 h-7 rounded-full border-2 border-white">
          </dd>
        </dl>
      </a>
    </li>
    <li class="flex rounded-lg (new-hover)hover:shadow-lg">
      <a href="#" class="(new-hover)hover:border-transparent (new-hover)hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium">
        New Project
      </a>
    </li>
  </ul>
</section>
`)

addClassTokens(lines)

const Code = forwardRef(({ tokens, lineNumbersBackground = true, children, ...props }, ref) => {
  // const lineNumbers = useMemo(() => {
  //   const t = tokens.flat(Infinity)
  //   let line = 2
  //   let str = '1\n'
  //   for (let i = 0; i < t.length; i++) {
  //     if (typeof t[i] === 'string') {
  //       const newLineChars = t[i].match(/\n/g)
  //       if (newLineChars !== null) {
  //         for (let j = 0; j < newLineChars.length; j++) {
  //           str += `${line++}\n`
  //         }
  //       }
  //     }
  //   }
  //   return str
  // }, [tokens])

  return (
    <div ref={ref} className="w-full flex-auto flex min-h-0 overflow-auto">
      <div className="w-full relative flex-auto">
        <pre className="flex min-h-full text-xs leading-4 md:text-sm md:leading-5">
          <div
            aria-hidden="true"
            className={`hidden md:block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none ${
              lineNumbersBackground ? 'bg-black bg-opacity-25' : ''
            }`}
            style={{ width: 50 }}
          >
            {/* {lineNumbers} */}
          </div>
          <code className="flex-auto relative block text-white pt-4 pb-4 px-4 overflow-auto">
            {children}
          </code>
        </pre>
      </div>
    </div>
  )
})

export default function StateVariants() {
  const [states, setStates] = useState([])
  const codeContainerRef = useRef()

  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto py-44">
      <section id="state-variants">
        <GradientLockup
          color="lightblue"
          rotate={1}
          left={
            <div className="relative z-10 bg-white rounded-tr-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8">
              <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
                <header className="flex items-center justify-between">
                  <h2 className="text-lg leading-6 font-medium text-black">Projects</h2>
                  <button
                    type="button"
                    className="flex items-center rounded-md bg-lightBlue-100 text-lightBlue-500 text-sm leading-5 font-medium px-4 py-2"
                  >
                    <svg width="12" height="20" fill="currentColor" className="mr-2">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
                      />
                    </svg>
                    New
                  </button>
                </header>
                <form className="relative">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                  <input
                    onFocus={() => {
                      setStates((states) => [...states, 'input-focus'])
                      codeContainerRef.current.scrollTo({ top: 50, behavior: 'smooth' })
                    }}
                    onBlur={() => setStates((states) => states.filter((x) => x !== 'input-focus'))}
                    type="text"
                    aria-label="Filter projects"
                    placeholder="Filter projects"
                    className="w-full text-sm leading-5 text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 focus:border-lightBlue-300 focus:outline-none"
                  />
                </form>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="group block rounded-lg p-4 border border-gray-200 hover:bg-lightBlue-500 hover:border-transparent hover:shadow-lg"
                        onMouseEnter={() => {
                          setStates((states) => [...states, 'item-hover'])
                          codeContainerRef.current.scrollTo({ top: 256, behavior: 'smooth' })
                        }}
                        onMouseLeave={() =>
                          setStates((states) => states.filter((x) => x !== 'item-hover'))
                        }
                      >
                        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                          <div>
                            <dt className="sr-only">Title</dt>
                            <dd className="leading-6 font-medium text-black group-hover:text-white">
                              API Integration
                            </dd>
                          </div>
                          <div>
                            <dt className="sr-only">Category</dt>
                            <dd className="text-sm leading-5 font-medium group-hover:text-lightBlue-200 sm:mb-4 lg:mb-0 xl:mb-4">
                              Engineering
                            </dd>
                          </div>
                          <div className="col-start-2 row-start-1 row-end-3">
                            <dt className="sr-only">Users</dt>
                            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <img
                                  key={j}
                                  src={`https://unsplash.it/48/48?random&amp;i=${i}&j=${j}`}
                                  alt=""
                                  width="48"
                                  height="48"
                                  className="w-7 h-7 rounded-full border-2 border-white"
                                />
                              ))}
                            </dd>
                          </div>
                        </dl>
                      </a>
                    </li>
                  ))}
                  <li className="hidden sm:flex lg:hidden xl:flex rounded-lg hover:shadow-lg">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium hover:border-transparent hover:shadow-xs"
                      onMouseEnter={() => {
                        setStates((states) => [...states, 'new-hover'])
                        codeContainerRef.current.scrollTo({ top: 1000, behavior: 'smooth' })
                      }}
                      onMouseLeave={() =>
                        setStates((states) => states.filter((x) => x !== 'new-hover'))
                      }
                    >
                      New Project
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          }
          right={
            <CodeWindow className="bg-lightBlue-500">
              <Code ref={codeContainerRef}>
                <div className={states.length > 0 ? 'mono' : ''}>
                  {lines.map((tokens, lineIndex) => (
                    <div
                      key={lineIndex}
                      className={
                        (states.includes('input-focus') && lineIndex === 14) ||
                        (states.includes('item-hover') && lineIndex >= 18 && lineIndex <= 32) ||
                        (states.includes('new-hover') && lineIndex >= 34 && lineIndex <= 38)
                          ? 'not-mono'
                          : ''
                      }
                    >
                      {tokens.map((token, tokenIndex) => {
                        if (
                          token.types[token.types.length - 1] === 'class' &&
                          token.content.startsWith('(')
                        ) {
                          const [, state] = token.content.match(/^\(([^)]+)\)/)
                          return (
                            <span
                              key={tokenIndex}
                              className={`transition-colors duration-500 ${getClassNameForToken(
                                token
                              )}`}
                              style={{
                                background: states.includes(state)
                                  ? 'rgba(134, 239, 172, 0.25)'
                                  : '',
                                borderRadius: 3,
                                padding: '1px 3px',
                                margin: '0 -3px',
                              }}
                            >
                              {token.content.substr(token.content.indexOf(')') + 1)}
                            </span>
                          )
                        }
                        return (
                          <span key={tokenIndex} className={getClassNameForToken(token)}>
                            {token.content}
                          </span>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </Code>
            </CodeWindow>
          }
        />
      </section>
    </div>
  )
}

function addClassTokens(lines) {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (
        lines[i][j - 3] &&
        lines[i][j - 3].content === 'class' &&
        lines[i][j - 3].types[lines[i][j - 3].types.length - 1] === 'attr-name'
      ) {
        lines[i].splice(
          j,
          1,
          ...lines[i][j].content.split(/(\s+)/).map((part, partIndex) => {
            if (partIndex % 2 === 0) {
              return { content: part, types: [...lines[i][j].types, 'class'] }
            }
            return { content: part, types: ['plain'] }
          })
        )
      }
    }
  }
}

const themeDict = {
  punctuation: 'text-code-punctuation',
  tag: 'text-code-tag',
  'attr-name': 'text-code-attr-name',
  'attr-value': 'text-code-attr-value',
  class: 'text-code-attr-value',
}

function getClassNameForToken({ types, empty }) {
  const typesSize = types.length
  if (typesSize === 1 && types[0] === 'plain') {
    return empty ? 'inline-block' : undefined
  }
  const className = (
    (themeDict[types[typesSize - 1]] || '') + (empty ? ' inline-block' : '')
  ).trim()
  return className === '' ? undefined : className
}
