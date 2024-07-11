import PageLayout from "@/layouts/Base";
import PostPreview from "@/components/blog/PostPreview";
import SocialList from "@/components/SocialList";
import { allPostsByDate, cactusTech } from "./index.astro";

<Fragment>
  <PageLayout meta={{ title: "Home" }}>
    <section>
      <h1 class="title mb-6">Hello World!</h1>
      <p class="mb-4">{`
			Hi,I'm Faisal. `}<br /> This is my personal blog site, where I share things that interest me.
        <br />{`
			 However, if you're interested in collaborating with me to discuss and create interesting
			applications for business or personal use, click the icon below.
		`}</p>
      <SocialList />
    </section>
    <section class="mt-16" {...{ "aria-label": "Blog post list" }}>
      <h2 class="title mb-4 text-xl">Posts</h2>
      <ul class="space-y-4 sm:space-y-2">
        {allPostsByDate.map((p) => (
          <Fragment><li class="flex flex-col gap-x-2 sm:flex-row">
            <PostPreview post={p} />
          </li></Fragment>
        ))}
      </ul>
    </section>
    <section class="mt-16">
      <h2 class="title mb-4 text-xl">Technologies</h2>
      <ul class="space-y-4 sm:space-y-2">
        {cactusTech.map(({ href, title, desc }) => (
          <Fragment><li>
            <a href={href} target="_blank" rel="noopener noreferrer" class="cactus-link inline-block">
              {title}
            </a>
            :<p class="inline-block sm:mt-2">{desc}</p>
          </li></Fragment>
        ))}
      </ul>
    </section>
  </PageLayout>

</Fragment>;
