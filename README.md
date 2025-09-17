
# GioyousTV

Welcome to **GioyousTV**! 🚀

A simple yet powerful media streaming web app that fetches video content from a `stream.json` file, displays it in an elegant and sleek video player, and provides multiple features for smooth streaming.
well no it is not streaming but uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

## Features

- **Stream Media**: Plays video directly from a `videourl` provided in the `stream.json` file.
- **Dynamic Controls**: Offers options for redirection or blob URL conversion.
- **Open Source**: Fully customizable and open-source on GitHub.
- **Responsive Design**: Clean, fluid layout optimized for desktop and mobile devices.
- **Error Handling**: Includes error messages for a smooth experience even when something goes wrong.

## Quick Start

To get started with **GioyousTV**:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/GioyousTV.git
   ```
2. **If there is a DELETEME folder, DELETE IT IMMEDIATELY.**
3. 
4. **Modify `stream.json`**:
   Modify the `stream.json` file with a `videourl` field containing the URL to the video you want to stream.

   Example:
   ```json
   {
     "videourl": "https://path.to/your/video.mp4"
   }
   ```

   Or:
   ```json
   {
     "videourl": "data:video/mp4;base64,VGVzdA=="
   }
   ```
   
3. **Open `index.html`** in your browser:
   Open `index.html` to watch* your video!

## Query Parameters

You can control the behavior of **GioyousTV** using the following URL query parameters:

- **`?redirect=true&blob=false`**: Redirects directly to the `videourl`.
- **`?redirect=true&blob=true`**: Converts `videourl` to a Blob URL and redirects.
- **`?redirect=false&blob=true`**: Displays the README file.
- **`?redirect=false&blob=false`**: Plays the video directly in the browser.

## Contributing

We welcome contributions to **GioyousTV**! Here's how you can help:

1. **Fork the repository**.
2. **Create a new branch** for your changes.
3. **Commit your changes** and push your branch.
4. **Open a pull request** to merge your changes.

Make sure to add tests and follow the coding style!

## License

GioyousTV is released under the [MIT License](LICENSE).

## Credits

- Designed by [Gioyous](https://github.com/Gioye).

---

Feel free to reach out via the GitHub Issues tab if you have any questions or need help! 😊
