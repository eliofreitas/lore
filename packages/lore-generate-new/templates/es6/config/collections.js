/**
 * Configuration file for collections
 *
 * This file is where you define overrides for the default collection behaviors.
 */

export default {

  /****************************************************************************
  *                                                                           *
  * Define properties that should apply to all collections here. Since we     *
  * only lightly wrapping Backbone, you can define any properties here that   *
  * Backbone supports for Collections.                                        *
  * See: http://backbonejs.org/#Collection                                    *
  *                                                                           *
  ****************************************************************************/

  properties: {

    // Headers that should be applied to all network requests
    // You can override this function on a per-collection basis
    // headers: function() {
    //   return {
    //     'Authorization': 'Bearer xyz'
    //   };
    // }

    //
    // See http://backbonejs.org/#Collection-parse
    //
    // parse: function(attributes) {
    //   return attributes;
    // }

  }

}
