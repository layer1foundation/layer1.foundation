export interface Blog {
    id: number;
    attributes:{
        title: string;
        content: string;
    }
   
    // Add other fields as necessary
  }
  
  export async function fetchBlogs(): Promise<Blog[]> {
    try {
      const res = await fetch('https://cms.l1f.xyz/api/blogs?populate=*');
      const { data } = await res.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      return [];
    }
  }