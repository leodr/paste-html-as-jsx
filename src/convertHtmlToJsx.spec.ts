import { convertHtmlToJsx } from "./convertHtmlToJsx";
import { html } from "./test/test-utils";

test("should convert HTML to JSX", () => {
    const htmlString = html`
        <!-- Hello world -->
        <div class="awesome" style="border: 1px solid red">
            <label for="name">Enter your name: </label>
            <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
    `;

    const output = `<div>
  {/* Hello world */}
  <div className="awesome" style={{border: '1px solid red'}}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p>Enter your HTML here</p>
</div>
`;

    expect(convertHtmlToJsx(htmlString)).toBe(output);
});

test("should leave empty alt tags intact", () => {
    const htmlString = html`
        <button
            class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu"
            aria-haspopup="true"
        >
            <span class="sr-only">Open user menu</span>
            <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
        </button>
    `;

    const output = `<button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
  <span className="sr-only">Open user menu</span>
  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
</button>
`;

    expect(convertHtmlToJsx(htmlString)).toBe(output);
});
