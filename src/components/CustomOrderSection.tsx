export const CustomOrderSection = ({ productId }: { productId: string }) => {
  return (
    <div className="bg-beige rounded-3xl p-8 my-12">
      <h3 className="text-2xl font-serif font-bold text-text mb-6">Custom Order Available</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Reference Image (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            className="input-field py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Special Instructions / Notes
          </label>
          <textarea
            placeholder="Share your ideas and requirements..."
            className="input-field py-3 h-32 resize-none"
          />
        </div>
        <p className="text-xs text-text-light italic">
          We will contact you within 24 hours to discuss your custom order and timeline.
        </p>
        <button className="btn-primary w-full">
          Request Custom Order
        </button>
      </div>
    </div>
  );
};
