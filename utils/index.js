export function getNotionContentBlockById(data, id) {
  return data.find((el) => el.id === id)?.plain_text;
}

export function getNotionImageById(data, id) {
  return data.find((el) => el.id === id)?.url;
}

export function cleanDataFromNotion(data) {
  return data.results
    .filter(
      (item) =>
        item.type === "heading_3" ||
        item.type === "heading_2" ||
        item.type === "heading_1" ||
        item.type === "paragraph" ||
        item.type === "image"
    )
    .map((item) => {
      if (item.type === "paragraph") {
        return {
          id: item.id.replace(/-/g, ""),
          plain_text: item.paragraph.rich_text[0]?.plain_text,
        };
      } else if (item.type === "image") {
        return {
          id: item.id.replace(/-/g, ""),
          url: item.image.file?.url || item.image.external?.url,
        };
      } else if (item.type === "heading_1") {
        return {
          id: item.id.replace(/-/g, ""),
          plain_text: item.heading_1.rich_text[0]?.plain_text,
        };
      } else if (item.type === "heading_2") {
        return {
          id: item.id.replace(/-/g, ""),
          plain_text: item.heading_2.rich_text[0]?.plain_text,
        };
      } else if (item.type === "heading_3") {
        return {
          id: item.id.replace(/-/g, ""),
          plain_text: item.heading_3.rich_text[0]?.plain_text,
        };
      }
    });
}
