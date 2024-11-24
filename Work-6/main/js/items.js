/**
 * Get quantity of records
 * @returns {number} quantity of records
*/
async function getQuantity() {
    const { count, error } = await supabase
      .from('Items')
      .select('*', { count: 'exact', head: true });
    if (error) {
      console.error('Error getting quantity of items:', error.message);
      return null;
    }
    return count;
}

/**
 * Assigns quantity of records
 * @param {number} newQ 
 * @returns {bool} result of assigning
 */
async function setQuantity(newQ) {
    const currQ = getQuantity(supabase);
    if (newQ === null || currQ === null) {
      return false;
    }
    const diff = Math.abs(newQ - currQ);
    if (newQ > currQ) {
      for (let i = 0; i < diff; i++) {
        const { error } = await supabase
          .from('Items')
          .insert([{ content: null }]);
        if (error) {
          console.error('Error adding records:', error.message);
          return false;
        }
      }
    } else if (newQ < currQ) {
      const { error } = await supabase
        .from('Items')
        .delete()
        .gte('id', currQ - newQ + 1);
      if (error) {
        console.error('Error deleting records:', error.message);
        return false;
      }
    }
    return true;
}

/**
 * Gets record by id
 * @param {number} id 
 * @returns {string} content of record
 */
async function getItem(id) {
    const currQ = getQuantity(supabase);
    if (id === null || currQ === null || id > currQ) {
      return null;
    }
    const { data, error } = await supabase
      .from('Items')
      .select('content')
      .eq('id', id)
      .single();
    if (error) {
      console.error('Error getting item:', error.message);
      return null;
    }
    return data.content;
}

/**
 * Assigns content to item
 * @param {number} id 
 * @param {string} content 
 * @returns {bool} result of assigning
 */
async function setItem(id, content) {
    const currQ = getQuantity(supabase);
    if (id === null || currQ === null || id > currQ || content === null) {
      return false;
    }
    const { error } = await supabase
      .from('Items')
      .update({ content })
      .eq('id', id);
    if (error) {
      console.error('Error updating item:', error.message);
      return false;
    }
    return true;
}