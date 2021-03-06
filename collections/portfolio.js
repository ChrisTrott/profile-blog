Projects = new Mongo.Collection( 'projects' );

Projects.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Projects.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let ProjectSchema = new SimpleSchema({
  "published": {
    type: Boolean,
    label: "Is this project published?",
    autoValue() {
      if ( this.isInsert ) {
        return false;
      }
    }
  },
  "featured": {
    type: Boolean,
    label: "Is this project featured on the Home page?",
    autoValue() {
      if ( this.isInsert ) {
        return false;
      }
    }
  },
  "author": {
    type: String,
    label: "The ID of the author of this post",
    autoValue() {
      let user = Meteor.users.findOne( { _id: this.userId } );
      if ( user ) {
        return `${ user.profile.name.first } ${ user.profile.name.last }`;
      }
    }
  },
  "projectDate": {
    type: String,
    label: "The date this project began",
    autoValue() {
      if ( this.isInsert ) {
        return ( new Date() ).toISOString();
      }
    }
  },
  "name": {
    type: String,
    label: "The name of this project",
    defaultValue: "Unnamed Project"
  },
  "slug": {
    type: String,
    label: "Slug",
    autoValue() {
      let slug              = this.value,
          existingSlugCount = Posts.find( { _id: { $ne: this.docId }, slug: new RegExp( slug ) } ).count(),
          existingUntitled  = Posts.find( { slug: { $regex: /untitled-post/i } } ).count();

      if ( slug ) {
        return existingSlugCount > 0 ? `${ slug }-${ existingSlugCount + 1 }` : slug;
      } else {
        return existingUntitled > 0 ? `untitled-post-${ existingUntitled + 1 }` : 'untitled-post';
      }
    }
  },
  "description": {
    type: String,
    label: "The description of this project",
    optional: true
  },
  "tags": {
    type: [ String ],
    label: "The tags for this portfolio item",
    optional: true
  },
  "images": {
    type: [ String ],
    label: "The images associated with this project",
    optional: true
  }
});

Projects.attachSchema( ProjectSchema );
