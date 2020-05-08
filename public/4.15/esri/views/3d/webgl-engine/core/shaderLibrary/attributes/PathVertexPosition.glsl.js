// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","./PositionAttribute.glsl","../../shaderModules/interfaces"],function(v,e,c,u,d){Object.defineProperty(e,"__esModule",{value:!0});e.PathVertexPosition=function(a,b){a.attributes.add("featureValue","vec4");a.vertex.code.add(d.glsl(f||(f=c(["\n  bool isCapVertex() {\n    return featureValue.w \x3d\x3d 1.0;\n  }\n  "],["\n  bool isCapVertex() {\n    return featureValue.w \x3d\x3d 1.0;\n  }\n  "]))));a.vertex.uniforms.add("size",
"vec3");b.vvSize?(a.vertex.uniforms.add("vvSizeMinSize","vec3"),a.vertex.uniforms.add("vvSizeMaxSize","vec3"),a.vertex.uniforms.add("vvSizeOffset","vec3"),a.vertex.uniforms.add("vvSizeFactor","vec3"),a.vertex.code.add(d.glsl(g||(g=c(["\n    vec2 getSize() {\n      return size.xy*clamp(vvSizeOffset + featureValue.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;\n    }\n    "],["\n    vec2 getSize() {\n      return size.xy*clamp(vvSizeOffset + featureValue.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;\n    }\n    "]))))):
a.vertex.code.add(d.glsl(h||(h=c(["\n    vec2 getSize(){\n      return size.xy;\n    }\n    "],["\n    vec2 getSize(){\n      return size.xy;\n    }\n    "]))));b.vvOpacity?(a.vertex.defines.addInt("VV_OPACITY_N",8),a.vertex.code.add(d.glsl(k||(k=c(["\n    uniform float vvOpacityValues[VV_OPACITY_N];\n    uniform float vvOpacityOpacities[VV_OPACITY_N];\n\n    vec4 applyOpacity(vec4 color) {\n      float value \x3d featureValue.z;\n      if (value \x3c\x3d vvOpacityValues[0]) {\n        return vec4( color.xyz, vvOpacityOpacities[0]);\n      }\n\n      for (int i \x3d 1; i \x3c VV_OPACITY_N; ++i) {\n        if (vvOpacityValues[i] \x3e\x3d value) {\n          float f \x3d (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);\n          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));\n        }\n      }\n\n      return vec4( color.xyz, vvOpacityOpacities[VV_OPACITY_N - 1]);\n    }\n    "],
["\n    uniform float vvOpacityValues[VV_OPACITY_N];\n    uniform float vvOpacityOpacities[VV_OPACITY_N];\n\n    vec4 applyOpacity(vec4 color) {\n      float value \x3d featureValue.z;\n      if (value \x3c\x3d vvOpacityValues[0]) {\n        return vec4( color.xyz, vvOpacityOpacities[0]);\n      }\n\n      for (int i \x3d 1; i \x3c VV_OPACITY_N; ++i) {\n        if (vvOpacityValues[i] \x3e\x3d value) {\n          float f \x3d (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);\n          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));\n        }\n      }\n\n      return vec4( color.xyz, vvOpacityOpacities[VV_OPACITY_N - 1]);\n    }\n    "]))))):
a.vertex.code.add(d.glsl(l||(l=c(["\n    vec4 applyOpacity(vec4 color){\n      return color;\n    }\n    "],["\n    vec4 applyOpacity(vec4 color){\n      return color;\n    }\n    "]))));b.vvColor?(a.vertex.defines.addInt("VV_COLOR_N",8),a.vertex.code.add(d.glsl(m||(m=c(["\n    uniform float vvColorValues[VV_COLOR_N];\n    uniform vec4 vvColorColors[VV_COLOR_N];\n\n    vec4 getColor() {\n      float value \x3d featureValue.y;\n      if (value \x3c\x3d vvColorValues[0]) {\n        return applyOpacity(vvColorColors[0]);\n      }\n\n      for (int i \x3d 1; i \x3c VV_COLOR_N; ++i) {\n        if (vvColorValues[i] \x3e\x3d value) {\n          float f \x3d (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);\n          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));\n        }\n      }\n\n      return applyOpacity(vvColorColors[VV_COLOR_N - 1]);\n    }\n    "],
["\n    uniform float vvColorValues[VV_COLOR_N];\n    uniform vec4 vvColorColors[VV_COLOR_N];\n\n    vec4 getColor() {\n      float value \x3d featureValue.y;\n      if (value \x3c\x3d vvColorValues[0]) {\n        return applyOpacity(vvColorColors[0]);\n      }\n\n      for (int i \x3d 1; i \x3c VV_COLOR_N; ++i) {\n        if (vvColorValues[i] \x3e\x3d value) {\n          float f \x3d (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);\n          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));\n        }\n      }\n\n      return applyOpacity(vvColorColors[VV_COLOR_N - 1]);\n    }\n    "]))))):
a.vertex.code.add(d.glsl(n||(n=c(["\n    vec4 getColor(){\n      return applyOpacity(vec4(1, 1, 1, 1));\n    }\n    "],["\n    vec4 getColor(){\n      return applyOpacity(vec4(1, 1, 1, 1));\n    }\n    "]))));a.include(u.PositionAttribute);a.attributes.add("profileRight","vec4");a.attributes.add("profileUp","vec4");a.attributes.add("profileVertexAndNormal","vec4");a.vertex.code.add(d.glsl(p||(p=c(["\n  vec3 calculateVPos() {\n    vec2 size \x3d getSize();\n    vec3 origin \x3d position;\n    vec3 right \x3d profileRight.xyz;\n    vec3 up \x3d profileUp.xyz;\n    vec3 forward \x3d cross(up, right);\n    vec2 profileVertex \x3d profileVertexAndNormal.xy * size;\n    vec2 profileNormal \x3d profileVertexAndNormal.zw;\n    float positionOffsetAlongProfilePlaneNormal \x3d 0.0;\n    float normalOffsetAlongProfilePlaneNormal \x3d 0.0;\n    "],
["\n  vec3 calculateVPos() {\n    vec2 size \x3d getSize();\n    vec3 origin \x3d position;\n    vec3 right \x3d profileRight.xyz;\n    vec3 up \x3d profileUp.xyz;\n    vec3 forward \x3d cross(up, right);\n    vec2 profileVertex \x3d profileVertexAndNormal.xy * size;\n    vec2 profileNormal \x3d profileVertexAndNormal.zw;\n    float positionOffsetAlongProfilePlaneNormal \x3d 0.0;\n    float normalOffsetAlongProfilePlaneNormal \x3d 0.0;\n    "]))));a.vertex.code.add(d.glsl(q||(q=c(["\n    if(!isCapVertex()) {\n      vec2 rotationRight \x3d vec2(profileRight.w, profileUp.w);\n      float maxDistance \x3d length(rotationRight);\n  "],
["\n    if(!isCapVertex()) {\n      vec2 rotationRight \x3d vec2(profileRight.w, profileUp.w);\n      float maxDistance \x3d length(rotationRight);\n  "]))));a.vertex.code.add(d.glsl(r||(r=c(["\n      rotationRight \x3d maxDistance \x3e 0.0 ? normalize(rotationRight) : vec2(0, 0);\n\n      // decompose vertex into rotationRight and rotationUp\n      // limit rotation right component to maxDistance\n      // and reassemble profile vertex from rotationRight and rotationUp\n      float rx \x3d dot(profileVertex, rotationRight);\n      if (abs(rx) \x3e maxDistance) {\n        // NB: we do the tangent by x\x3d-y and y\x3dx\n        vec2 rotationUp \x3d vec2(-rotationRight.y, rotationRight.x);\n        float ry \x3d dot(profileVertex, rotationUp);\n        profileVertex \x3d rotationRight * maxDistance * sign(rx) + rotationUp * ry;\n      }\n    }else{\n       positionOffsetAlongProfilePlaneNormal \x3d profileRight.w * size[0];\n       normalOffsetAlongProfilePlaneNormal \x3d profileUp.w;\n    }\n\n    vec3 offset \x3d right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;\n\n    vec4 localPosition \x3d vec4(origin + offset, 1.0);\n    return (model * localPosition).xyz;\n  }\n  "],
["\n      rotationRight \x3d maxDistance \x3e 0.0 ? normalize(rotationRight) : vec2(0, 0);\n\n      // decompose vertex into rotationRight and rotationUp\n      // limit rotation right component to maxDistance\n      // and reassemble profile vertex from rotationRight and rotationUp\n      float rx \x3d dot(profileVertex, rotationRight);\n      if (abs(rx) \x3e maxDistance) {\n        // NB: we do the tangent by x\x3d-y and y\x3dx\n        vec2 rotationUp \x3d vec2(-rotationRight.y, rotationRight.x);\n        float ry \x3d dot(profileVertex, rotationUp);\n        profileVertex \x3d rotationRight * maxDistance * sign(rx) + rotationUp * ry;\n      }\n    }else{\n       positionOffsetAlongProfilePlaneNormal \x3d profileRight.w * size[0];\n       normalOffsetAlongProfilePlaneNormal \x3d profileUp.w;\n    }\n\n    vec3 offset \x3d right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;\n\n    vec4 localPosition \x3d vec4(origin + offset, 1.0);\n    return (model * localPosition).xyz;\n  }\n  "]))));
a.vertex.code.add(d.glsl(t||(t=c(["\n  vec4 localNormal() {\n    vec3 right \x3d profileRight.xyz;\n    vec3 up \x3d profileUp.xyz;\n    vec3 forward \x3d cross(up, right);\n    vec2 profileNormal \x3d profileVertexAndNormal.zw;\n\n    vec3 normal \x3d right * profileNormal.x + up * profileNormal.y;\n\n    if(isCapVertex()) {\n      normal +\x3d forward * profileUp.w;\n    }\n\n    return vec4(normal, 1.0);\n  }\n  "],["\n  vec4 localNormal() {\n    vec3 right \x3d profileRight.xyz;\n    vec3 up \x3d profileUp.xyz;\n    vec3 forward \x3d cross(up, right);\n    vec2 profileNormal \x3d profileVertexAndNormal.zw;\n\n    vec3 normal \x3d right * profileNormal.x + up * profileNormal.y;\n\n    if(isCapVertex()) {\n      normal +\x3d forward * profileUp.w;\n    }\n\n    return vec4(normal, 1.0);\n  }\n  "]))))};
e.setVVUniforms=function(a,b){b.vvSizeEnabled&&(a.setUniform3fv("vvSizeMinSize",b.vvSizeMinSize),a.setUniform3fv("vvSizeMaxSize",b.vvSizeMaxSize),a.setUniform3fv("vvSizeOffset",b.vvSizeOffset),a.setUniform3fv("vvSizeFactor",b.vvSizeFactor));b.vvColorEnabled&&(a.setUniform1fv("vvColorValues",b.vvColorValues),a.setUniform4fv("vvColorColors",b.vvColorColors));b.vvOpacityEnabled&&(a.setUniform1fv("vvOpacityValues",b.vvOpacityValues),a.setUniform1fv("vvOpacityOpacities",b.vvOpacityOpacities))};var f,g,
h,k,l,m,n,p,q,r,t});