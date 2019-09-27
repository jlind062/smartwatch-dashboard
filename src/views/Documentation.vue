<template>
    <div>
        <h1 id="smartwatchdashboardui">SmartWatch Dashboard UI</h1>

        <p><strong>Name: Josh Lindsay</strong></p>

        <p><strong>Instructor: Mihal Miu</strong></p>

        <p><strong>Course: CCPS706 Computer Networking</strong></p>

        <p><strong>Project: Develop a front-end interface using Electron to display a JSON object containing smartwatch data via a rest API</strong></p>

        <p>License: <a href="https://opensource.org/licenses/MIT">MIT Licence</a></p>

        <h2 id="projectoverview">Project Overview</h2>

        <p>This project is essentially a single page web app built with the vue front-end javascript framework. It can be run as a web app or an electron web app.</p>

        <h3 id="whyvue">Why Vue?</h3>

        <p>I had previous experience with using the python frameworks Flask and Django to develop fullstack web applications. However, since this project is exclusively front-end, both those frameworks would be overkill as they are much more geared towards back-end development. Also, since electron is built on Javascript it makes to use the same language instead of introducing more complexity by using python.</p>

        <p>The page could be made using old school seperate html, css, and js files with the help of a lightweight library like bootrsrap as I don't need to worry about much in terms of scalability. Although the simplest of possible implementations, this is not suited for two reasons.</p>

        <ol>
        <li>It does not provide me with any additonal knowledge. As I will be graduating soon and gearing up for the workforce, I need a portfolio and skillset that tailors to the needs of employers. For web development, there is now the expectaction of using frameworks. It is the best use of my time to leverage the time spent of school projects with developing useful skills for the workforce.</li>

        <li>The web app needs to be modular. Since different smartwatches collect different data, the web page must display different data in different ways depending on the user. Modular development is much more difficult with pure javascript as complexity and dependencies grow quickly. Especially since at the start of development it is unknown what data will be provided.</li>
        </ol>

        <p>Javascript frameworks solve both these problems as they are in demand and designed around components. So, I can simply design the components for all the different smartwatch data and render only the relevant components.</p>

        <p>There are three main Javascript frameworks: React, Vue, and Angular. Angular is built by google and extremely powerful, but follows the "everything but the kitchen sink" mentality. Since I follow the "only as complex as it needs to be" mentality, Angular would be ill suited. The majorty of features, dependencies, and bulky code included would not be used by the project so it would be wasted. React is the most popular of the frameworks. It is maintained by FaceBook and has a large enterprise userbase. However, it is a little more strict than Vue in addition to having a steeper learning curve. Vue follows the same basic scructure as React, but is more flexible and lighter with a smaller filesize and less dependencies. Since this project is relatively simple and light weight, Vue is more suited being the simpler more flexible framework. It also has the same logic and similar practices as React so the knowledhe can be extended to React if I have to in the future.</p>

        <p>In terms of development of speed and relevance, Vue is the best compromise.</p>

        <h2 id="vueoverview">Vue Overview</h2>

        <p>Vue is for single page web apps so it breaks things down into components (or vue's) instead of strictly pages. So, each page contais its own html, css, and javascript instead of having things like global css files for all pages (although that can be easily implemented). Each .vue file consists of three sections:</p>

        <ol>
        <li><strong>template</strong> - this is the html that will be displayed. Since vue deisgns everyhting around components, it is required that everything be wrapped inside a single div. It supports most dynamic templating functions like looping through lists, inseting other components, passing in data/variables, etc.</li>

        <li><strong>style</strong> - this is the css style for the page. This can either by global or local to the component.</li>

        <li><strong>script</strong> - this is the javascript code and logic for the page. An important note is that this is not the traditional javascript we are used to being implemented on pages. It is the code for the vue project. It is where you import depencies, state/data, and export page information to be used in other modules of the Vue framework.</li>
        </ol>

        <p>Speaking of other modules, </p>

        <h2 id="projectstructure">Project Structure</h2>

        <p>Vue </p>

        <h2 id="problemsfacedandsolutions">Problems Faced and Solutions</h2>

        <p>The first problem faced was obviously the learning curve. Although I had known javascript and the basics of web development, javascript frameworks and Vue have very little to do in practice with</p>
    </div>
</template>


// using github markdown style sheet from: https://gist.github.com/tuzz/3331384
<style scoped>
    body {
    font-family: Helvetica, arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    padding: 30px;
    color: #333;
    }

    body > *:first-child {
    margin-top: 0 !important;
    }

    body > *:last-child {
    margin-bottom: 0 !important;
    }

    a {
    color: #4183C4;
    text-decoration: none;
    }

    a.absent {
    color: #cc0000;
    }

    a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    }

    h1, h2, h3, h4, h5, h6 {
    margin: 20px 0 10px;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;
    }

    h2:first-child, h1:first-child, h1:first-child + h2, h3:first-child, h4:first-child, h5:first-child, h6:first-child {
    margin-top: 0;
    padding-top: 0;
    }

    h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {
    text-decoration: none;
    }

    h1 tt, h1 code {
    font-size: inherit;
    }

    h2 tt, h2 code {
    font-size: inherit;
    }

    h3 tt, h3 code {
    font-size: inherit;
    }

    h4 tt, h4 code {
    font-size: inherit;
    }

    h5 tt, h5 code {
    font-size: inherit;
    }

    h6 tt, h6 code {
    font-size: inherit;
    }

    h1 {
    font-size: 28px;
    color: black;
    }

    h2 {
    font-size: 24px;
    border-bottom: 1px solid #cccccc;
    color: black;
    }

    h3 {
    font-size: 18px;
    }

    h4 {
    font-size: 16px;
    }

    h5 {
    font-size: 14px;
    }

    h6 {
    color: #777777;
    font-size: 14px;
    }

    p, blockquote, ul, ol, dl, li, table, pre {
    margin: 15px 0;
    }

    hr {
    border: 0 none;
    color: #cccccc;
    height: 4px;
    padding: 0;
    }

    body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
    }

    body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
    }

    body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
    }

    body > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
    }

    a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
    }

    h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
    margin-top: 0;
    }

    li p.first {
    display: inline-block;
    }

    ul, ol {
    padding-left: 30px;
    }

    ul :first-child, ol :first-child {
    margin-top: 0;
    }

    ul :last-child, ol :last-child {
    margin-bottom: 0;
    }

    dl {
    padding: 0;
    }

    dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
    }

    dl dt:first-child {
    padding: 0;
    }

    dl dt > :first-child {
    margin-top: 0;
    }

    dl dt > :last-child {
    margin-bottom: 0;
    }

    dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
    }

    dl dd > :first-child {
    margin-top: 0;
    }

    dl dd > :last-child {
    margin-bottom: 0;
    }

    blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
    }

    blockquote > :first-child {
    margin-top: 0;
    }

    blockquote > :last-child {
    margin-bottom: 0;
    }

    table {
    padding: 0;
    }
    table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
    }

    table tr:nth-child(2n) {
    background-color: #f8f8f8;
    }

    table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
    }

    table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
    }

    table tr th :first-child, table tr td :first-child {
    margin-top: 0;
    }

    table tr th :last-child, table tr td :last-child {
    margin-bottom: 0;
    }

    img {
    max-width: 100%;
    }

    span.frame {
    display: block;
    overflow: hidden;
    }

    span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto;
    }

    span.frame span img {
    display: block;
    float: left;
    }

    span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0;
    }

    span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
    }

    span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
    }

    span.align-center span img {
    margin: 0 auto;
    text-align: center;
    }

    span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
    }

    span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
    }

    span.align-right span img {
    margin: 0;
    text-align: right;
    }

    span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
    }

    span.float-left span {
    margin: 13px 0 0;
    }

    span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
    }

    span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
    }

    code, tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px;
    }

    pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
    }

    .highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
    }

    pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
    }

    pre code, pre tt {
    background-color: transparent;
    border: none;
    }
</style>
