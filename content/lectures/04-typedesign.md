---
title: "Type Design Basics"
date: 2020-02-27
summary: "Introduction to Glyphs"
reference: 
 - title: "Glyphs"
   link: "https://glyphsapp.com/"
 - title: "Noordizij Cube"
   link: "https://typetr.typenetwork.com/assets_content/uploads/NoordizijCube12.gif"
 - title: "Inside Paragraphs"
   link: "http://www.insideparagraphs.com/"

---

[Demo Glyphs file](https://github.com/risd-web/webtype-demos/tree/master/03-variable-font)

For our variable font project, we will be using [Glyphs](https://glyphsapp.com/).
Please download the full version and use the free trial for purposes of this class.
If you find that you would like to continue drawing beyond the span of this project, there are discounted student licenses that Glyphs provides.
Glyphs has some robust [tutorials](https://glyphsapp.com/tutorials) as well as an active [forum](https://forum.glyphsapp.com/), which may be useful in your research.

Below are some key terms we will be using in type design.
Begin with the Glyphs tutorial on [Multiple Masters](https://glyphsapp.com/tutorials/multiple-masters-part-1-setting-up-masters).

## Terms

- **Design Space**: The range of design variations belonging to one type family.
- **Master**: A set of drawn characters. Every typeface needs to have at least one master. When drawing a typeface, you are usually drawing a master.
  - The number of masters will determine the **design space** of the typeface.
- **Instance**: A specified slice within the design space of the typeface. 
  - Masters are usually also instances, but not necessarily.
  - The type designer determines how many instances will be interpolated from the given masters.
- **Interpolation**: The process of programmatically generating instances in-between masters.
- **Node**: Any specified point of your glyph. Nodes can be either on-curve or off-curve.
  - **Oncurve**: A node along the path.
  - **Offcurve**: A node off the edge of a path, serving as an endpoint of a handle connected to an oncurve node.

## Interpolation
In order for a glyph to interpolate across masters, it needs have [compatible outlines](https://glyphsapp.com/tutorials/multiple-masters-part-2-keeping-your-outlines-compatible), which means satisfying the following conditions.
  - **number of paths**: all masters have the same amount of paths, nodes and handles, as well as components
  - **path order**: all components, paths, nodes and handles are in the same order across all masters. 
    - **within a path**: Make sure the *triangular node*, which marks the first node, is in the same location for each path across masters. I recommend choosing a specific corner to be consistent (for example, the node that is that the bottom left of the glyph.) To change the first node, right click the node and select *Make Node First*. 
    - **within a glyph**: Make sure the order of the paths are in the same order. Go to *Filter* > *Fix compatibility* to view the order of your shapes.
  - **anchors**: all masters have the same set of anchors (Anchors are used to generate diacritic marks. We will not be using anchors for the scope of our project.)



